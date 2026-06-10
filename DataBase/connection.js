const mongoose=require('mongoose')

const dataBaseConnection =async (url)=>{

    try {
        await mongoose.connect(url)
        console.log(`DataBase connected`)
    } catch (error) {
        console.log(`There error Occured : ${error}`)
    }

}

module.exports={
    dataBaseConnection
}