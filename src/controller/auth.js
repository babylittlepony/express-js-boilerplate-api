const mongoose = require("mongoose");
const express = require("express");
const { user } = require("../models/user");

const authController =
  (req,
  (res) => {
    const { username, email, password } = req.body;

    const userRegister = new user({
      username,
      email,
      password,
    });
  });
