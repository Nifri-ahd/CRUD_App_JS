// routing persons info
const express=require('express')
const router = express.Router()
const Persons=require('./PersonsSchema')





//POST person

router.post('/',async(req,res) =>{
    try
    {
    //console.log(req.body.Name);
    const postPerson = await new Persons({
        Name : req.body.Name,
        Age : req.body.Age
    })
    const savePerson = await postPerson.save()
    res.status(200).json(savePerson)
    }
    catch (err) 
    {
        res.json({"error":err})

}
})




//GET person

router.get('/',async(req,res) =>{
    try
    {
        const getAll = await Persons.find()
        res.status(200).json(getAll)

    }
    catch (err) 
    {
        res.json({"error":err})

}
})




//GET person by id

router.get('/:id',async(req,res) =>{
    try
    {
        const getById = await Persons.findById(req.params.id)
        res.status(200).json(getById)

    }
    catch (err) 
    {
        res.json({"error":err})

}
})


//UPDATE person

router.put('/:id',async(req,res) =>{
    try
    {
        const updPerson = await Persons.updateOne
        ({_id:req.params.id},{$set:{Name:req.body.Name,Age:req.body.Age}})
        res.status(200).json(updPerson)

    }
    catch (err) 
    {
        res.json({"error":err})

}
})



//DELETE person

router.delete('/:id',async(req,res) =>{
    try
    {
        const delPerson = await Persons.remove({_id:req.params.id})
        res.status(200).json(delPerson)

    }
    catch (err) 
    {
        res.json({"error":err})

}
})




module.exports = router;