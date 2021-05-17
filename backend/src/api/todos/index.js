const router = require("express").Router();

router.get("/", (req, res, next) => {
  const testData = {
    data: {
      todos: [
        { id: 1, description: "clean" },
        { id: 2, description: "cook" },
        { id: 3, description: "wash stuff" },
      ],
    },
  };

  res.json(testData);
});

module.exports = router;
