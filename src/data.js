[
  {
    form_id: 2,
    form_name: "sample form 2",
    form_description:
      "This is just a sample form, the questions are not important.",
    form_fields: [
      { question: "Your name", type: "inputText", isRequired: true },
      { question: "Do you work from home", type: "bool", isRequired: false },
      {
        question: "Which department?",
        type: "select",
        isRequired: true,
        options: ["Marketing", "Sales", "Tech", "HR"],
      },
      { question: "When did you join?", type: "date" },
    ],
    users_assigned: [
      { id: 2, user_name: "Spiderman", user_email: "spiderman@marvel.com" },
      { id: 3, user_name: "superman", user_email: "superman@dc.com" },
    ],
  },
 
];


const skeleton = {
    form_name: "Untitled form",
    form_description: "",
    form_fields: [
      { question: "dddd", type: "text", isRequired: true },
      { question: "qqq", type: "radio", options: ['one','tow'], isRequired: false },
      {
        question: "qsddc",
        type: "select",
        isRequired: true,
        options: ['one','tow'],
      },
      { question: "lllll", type: "date", isRequired: true },
    ],
    users_assigned: ["batman@dc.com"],
  };

  {
    "form_name": "sample form 3",
    "form_description": "This is just a sample form, the questions are not important.",
    "form_fields": [
        {
            "question": "Your name",
            "type": "inputText",
            "isRequired": true
        },
        {
            "question": "Do you work from home",
            "type": "bool",
            "isRequired": false
        },
        {
            "question": "Which department?",
            "type": "select",
            "isRequired": true,
            "options": [
                "Marketing",
                "Sales",
                "Tech",
                "HR"
            ]
        },
        {
            "question": "When did you join?",
            "type": "date"
        }
    ],
    "users_assigned": ["spiderman@marvel.com", "superman@dc.com" ]
}



