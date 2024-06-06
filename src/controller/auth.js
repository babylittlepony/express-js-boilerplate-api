const mongoose = require("mongoose");
const express = require("express");
const { user } = require("../models/user");

const authController =
  (req,
  (res) => {
    const { username, email, password } = req.body;

    if(!req.body){
        throw console.error("Input the data!");
    }
    if () {
        
    }

    const userRegister = new user({
      username,
      email,
      password,
    });
  });
