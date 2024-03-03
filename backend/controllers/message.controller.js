import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId,io } from "../socket/socket.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //this wont run parallely
    // await conversation.save();
    // await newMessage.save();

    await Promise.all([conversation.save(),newMessage.save()])

    //socket 


    const receiverSocketId = getReceiverSocketId(recieverId)

    if(receiverSocketId){
      io.to(receiverSocketId).emit("newMessage",newMessage)
    }

    res.status(201).json(newMessage);
  } catch (error) {
    console.log(error);
  }
};


export const getMessages = async (req,res) =>{

  try {

  const {id:usertoChat} = req.params;
  const senderId = req.user._id

  const conversations = await Conversation.findOne({
    participants : {$all:[senderId,usertoChat]}
  }).populate("messages")

  if(!conversations){
    return res.status(201).json([])
  }

  res.status(200).json(conversations.messages)
    
  } catch (error) {

    console.log(error)

  }

}