const express=require("express");

const {URL}=require('../modles/urlSchema')

// const HandleshoridCreationandExecution=async (req,res)=>{

// try {
//     const shortid=req.params.shortid
    
//     const result=await URL.findOne({shortId:shortid})
//     if(!result) res.status(404).send({msg:"NO created shorted on this url"})
//     return res.redirect(result.redirectUrl)
// } catch (error) {
//     console.log("Something wrong occur  whlile finding the shortid and redirecting ",error)
// }

// }
// module.exports={
//     HandleshoridCreationandExecution
// }
const HandleshoridCreationandExecution = async (req, res) => {
    try {
        const shortid = req.params.shortid;
        const result = await URL.findOne({ shortId: shortid });

        if (!result) {
            // Added 'return' here to stop the code from reaching the redirect line
            return res.status(404).send({ msg: "No URL found for this short ID" });
        }

        // Now this only runs if result exists
        return res.redirect(result.redirectUrl);
        
    } catch (error) {
        console.error("Error during redirection:", error);
        return res.status(500).send({ msg: "Internal Server Error" });
    }
}

module.exports={
    HandleshoridCreationandExecution
}