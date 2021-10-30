const io=require("socket.io")(5000,{
   cors:{
    origin:"http://localhost:3000"
   }
});

io.on("connection",(socket)=>{
   socket.on('join',(data)=>{
    socket.join(data.id)                                                                                 
   })

   socket.on('orderDetails',(data)=>{
       console.log(data)
       io.to(data.id).emit('orderUpdated',data)

   })
})


                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   