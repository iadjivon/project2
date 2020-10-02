//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Location = require("../../models/locations")
///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////
//INDEX
router.get("/", auth, async (req, res)=>{
  try{
  const locations = await Location.find({username: req.session.username});
  res.render("locations/index.jsx", {locations})
} catch (err){
  console.log(err);
}
})
// NEW ROUTE 
router.get("/new", auth, async (req, res)=> {
  res.render("locations/new.jsx")
})

//CREATE ROUTE
router.post("/", auth, async (req, res)=>{
  req.body.username = req.session.username 
  const newLocation = await Location.create(req.body)
  res.redirect("/locations/")
})

//DELETE ROUTE
router.delete("/:id", auth, async (req, res)=>{
  await Location.findByIdAndDelete(req.params.id);
  res.redirect("/locations/")
});


// EDIT ROUTE
router.get("/edit/:id", auth, async (req, res)=>{
  const location = await Location.findById(req.params.id)
  res.render("locations/edit.jsx", {location})
})

//UPDATE ROUTE
router.put("/edit/:id", auth, async (req, res)=>{
  try
  {req.body.username = req.session.username
    await Location.findByIdAndUpdate(req.params.id, req.body)
    res.redirect("/locations/")
  } catch(error){
    console.log(error)
  }
  
})


//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
