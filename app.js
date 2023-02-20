import express from "express";

export const app = express();

// Middlewares
app.use((req, res, next) => {
  console.log("Accusé réception de la requête");
  next();
});
app.use((req, res, next) => {
  res.status(201);
  next();
});
app.use((req, res, next) => {
  res.json({ message: "Votre requête a bien été reçue - Statut 201" });
  next();
});
app.use((req, res, next) => {
  console.log("Message de requête reçue envoyé");
});
