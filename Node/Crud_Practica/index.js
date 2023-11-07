const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const connect = require("./utils/db");

const Dog = require("./models/dog.model");

const server = express();

connect();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const router = express.Router();
//GET ALL DOGS
router.get("/dogs", async (req, res) => {
  try {
    const dogs = await Dog.find();
    return res.status(200).json(dogs);
  } catch (error) {
    return res.status(400).json("Dogs not found");
  }
});

router.get("/dogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dog = await Dog.findById(id);
    return res.status(200).json(dog);
  } catch (error) {
    return res.status(404).json("Dog not found");
  }
});
router.post("/dogs", async (req, res) => {
  try {
    const newDog = new Dog(req.body);
    await newDog.save();
    return res.status(201).json(newDog);
  } catch (error) {
    return res.status(500).json("Error creating dog");
  }
});
router.delete("/dogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await Dog.findByIdAndDelete(id);
    return res.status(200).json("Dog deleted");
  } catch (error) {
    return res.status(500).json("Error deleting dog");
  }
});
router.patch("/dogs/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const newDog = new Dog(req.body);

    newDog._id = id;
    await Dog.findByIdAndUpdate(id, newDog);

    return res.status(200).json(newDog);
  } catch (error) {
    return res.status(500).json("Error updating dog", error);
  }
});

server.use("/", router);

const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
