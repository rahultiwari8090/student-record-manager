import Student from "../models/studentSchema.js";

 
const home = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = 5000;

  try {
    const totalStudents = await Student.countDocuments();
    const totalPages = Math.ceil(totalStudents / limit);

    const records = await Student.find({})
      .skip((page - 1) * limit)
      .limit(limit);

    res.render("index", { records, currentPage: page, totalPages });
  } catch (error) {
    console.log(error.message);
  }
};

 
const student_new_records = async (req, res) => {
  res.render("student_new_records", { validationErrors: {}, formData: {} });
};

 
const add_new_records = async (req, res) => {
  try {
    const { name, age, course } = req.body;
    const record = new Student({ name, age, course });
    await record.save();
    console.log("New Record Added!");
    res.redirect("/");
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = {};
      for (let field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }
      return res.render("student_new_records", { validationErrors, formData: req.body });
    }
    console.log(error.message);
    res.redirect("/");
  }
};

 
const search_student = async (req, res) => {
  try {
    const searchQuery = req.body.search;
    const students = await Student.find({ name: { $regex: searchQuery, $options: "i" } });
    res.render("result", { students, searchQuery });
  } catch (error) {
    console.log(error.message);
  }
};

 
const edit_student_records = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id);
    if (!student) return res.status(404).send("Student not found");
    res.render("edit_student_records", { student, validationErrors: {} });
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

 
const update_student_records = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, age, course } = req.body;
    await Student.findByIdAndUpdate(id, { name, age, course });
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};


const delete_student_records = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
};

export {
  home,
  student_new_records,
  add_new_records,
  search_student,
  edit_student_records,
  update_student_records,
  delete_student_records
};
