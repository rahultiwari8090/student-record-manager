import express from "express";
import { 
  home, 
  student_new_records, 
  add_new_records, 
  search_student, 
  edit_student_records, 
  update_student_records, 
  delete_student_records 
} from "../controllers/home.js";

const route = express.Router();
 
route.get("/", home);

 
route.get("/new_record", student_new_records);
route.post("/new_records", add_new_records);

 
route.post("/search", search_student);

 
route.get("/edit/:id", edit_student_records);
route.post("/edit/:id", update_student_records);

 
route.post("/delete/:id", delete_student_records);

export default route;
