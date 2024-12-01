// /users

// [
//   {
//     id: 1,
//     user_name: "Harvey Specter",
//     user_email: "harvey.specter@pearsonhardman.com",
//   },
//   { id: 2, user_name: "Mike Ross", user_email: "mike.ross@pearsonhardman.com" },
//   {
//     id: 3,
//     user_name: "Donna Paulsen",
//     user_email: "donna.paulsen@pearsonhardman.com",
//   },
//   {
//     id: 4,
//     user_name: "Rachel Zane",
//     user_email: "rachel.zane@pearsonhardman.com",
//   },
//   {
//     id: 5,
//     user_name: "Louis Litt",
//     user_email: "louis.litt@pearsonhardman.com",
//   },
// ];

// /form

// [
//   {
//     form_id: 4,
//     form_name: "Suits",
//     form_description: "A must watch court drama",
//     form_fields: [
//       {
//         id: 1,
//         question: "How many seasons are there?",
//         type: "text",
//         options: [{ id: 1, value: "Option" }],
//         isRequired: true,
//       },
//       {
//         id: 2,
//         question: "When did suits first air?",
//         type: "date",
//         options: [{ id: 1, value: "Option" }],
//         isRequired: false,
//       },
//       {
//         id: 3,
//         question: "Who is you favourite character?",
//         type: "select",
//         options: [
//           { id: 1, value: "Harvey" },
//           { id: 2, value: "Mike" },
//           { id: 3, value: "Donna" },
//           { id: 4, value: "Jessica" },
//           { id: 5, value: "Louis" },
//           { id: 6, value: "Rachel" },
//         ],
//         isRequired: true,
//       },
//       {
//         id: 4,
//         question: "Would you recommend it to your friend?",
//         type: "radio",
//         options: [
//           { id: 1, value: "Yes" },
//           { id: 2, value: "No" },
//           { id: 3, value: "Maybe" },
//         ],
//         isRequired: true,
//       },
//     ],
//     users_assigned: [
//       {
//         id: 5,
//         user_name: "Louis Litt",
//         user_email: "louis.litt@pearsonhardman.com",
//       },
//       {
//         id: 4,
//         user_name: "Rachel Zane",
//         user_email: "rachel.zane@pearsonhardman.com",
//       },
//       {
//         id: 3,
//         user_name: "Donna Paulsen",
//         user_email: "donna.paulsen@pearsonhardman.com",
//       },
//       {
//         id: 2,
//         user_name: "Mike Ross",
//         user_email: "mike.ross@pearsonhardman.com",
//       },
//       {
//         id: 1,
//         user_name: "Harvey Specter",
//         user_email: "harvey.specter@pearsonhardman.com",
//       },
//     ],
//   },
//   {
//     form_id: 20,
//     form_name: "Peaky Blinders",
//     form_description: "Gangsta stroy",
//     form_fields: [
//       {
//         id: 1,
//         question: "Main character?",
//         type: "text",
//         options: [{ id: 1, value: "Option" }],
//         isRequired: true,
//       },
//       {
//         id: 2,
//         question: "How many brothers are there?",
//         type: "select",
//         options: [
//           { id: 1, value: "3" },
//           { id: 2, value: "4" },
//           { id: 3, value: "5" },
//         ],
//         isRequired: true,
//       },
//       {
//         id: 3,
//         question: "Did you like it?",
//         type: "radio",
//         options: [
//           { id: 1, value: "Yes" },
//           { id: 2, value: "No" },
//         ],
//         isRequired: true,
//       },
//       {
//         id: 4,
//         question: "When did you last watch it?",
//         type: "date",
//         options: [{ id: 1, value: "Option" }],
//         isRequired: true,
//       },
//     ],
//     users_assigned: [
//       {
//         id: 5,
//         user_name: "Louis Litt",
//         user_email: "louis.litt@pearsonhardman.com",
//       },
//       {
//         id: 2,
//         user_name: "Mike Ross",
//         user_email: "mike.ross@pearsonhardman.com",
//       },
//       {
//         id: 1,
//         user_name: "Harvey Specter",
//         user_email: "harvey.specter@pearsonhardman.com",
//       },
//     ],
//   },
// ];

// /form/?userId=1

// [
//   {
//     form_id: 4,
//     form_name: "Suits",
//     form_description: "A must watch court drama",
//     form_fields: [
//       {
//         id: 1,
//         question: "How many seasons are there?",
//         type: "text",
//         options: [{ id: 1, value: "Option" }],
//         isRequired: true,
//       },
//       {
//         id: 2,
//         question: "When did suits first air?",
//         type: "date",
//         options: [{ id: 1, value: "Option" }],
//         isRequired: false,
//       },
//       {
//         id: 3,
//         question: "Who is you favourite character?",
//         type: "select",
//         options: [
//           { id: 1, value: "Harvey" },
//           { id: 2, value: "Mike" },
//           { id: 3, value: "Donna" },
//           { id: 4, value: "Jessica" },
//           { id: 5, value: "Louis" },
//           { id: 6, value: "Rachel" },
//         ],
//         isRequired: true,
//       },
//       {
//         id: 4,
//         question: "Would you recommend it to your friend?",
//         type: "radio",
//         options: [
//           { id: 1, value: "Yes" },
//           { id: 2, value: "No" },
//           { id: 3, value: "Maybe" },
//         ],
//         isRequired: true,
//       },
//     ],
//   },
//   {
//     form_id: 20,
//     form_name: "Peaky Blinders",
//     form_description: "Gangsta stroy",
//     form_fields: [
//       {
//         id: 1,
//         question: "Main character?",
//         type: "text",
//         options: [{ id: 1, value: "Option" }],
//         isRequired: true,
//       },
//       {
//         id: 2,
//         question: "How many brothers are there?",
//         type: "select",
//         options: [
//           { id: 1, value: "3" },
//           { id: 2, value: "4" },
//           { id: 3, value: "5" },
//         ],
//         isRequired: true,
//       },
//       {
//         id: 3,
//         question: "Did you like it?",
//         type: "radio",
//         options: [
//           { id: 1, value: "Yes" },
//           { id: 2, value: "No" },
//         ],
//         isRequired: true,
//       },
//       {
//         id: 4,
//         question: "When did you last watch it?",
//         type: "date",
//         options: [{ id: 1, value: "Option" }],
//         isRequired: true,
//       },
//     ],
//   },
// ];

// /form/4

// const form = {
//   form_id: 4,
//   form_name: "Suits",
//   form_description: "A must watch court drama",
//   form_fields: [
//     {
//       id: 1,
//       question: "How many seasons are there?",
//       type: "text",
//       options: [{ id: 1, value: "Option" }],
//       isRequired: true,
//     },
//     {
//       id: 2,
//       question: "When did suits first air?",
//       type: "date",
//       options: [{ id: 1, value: "Option" }],
//       isRequired: false,
//     },
//     {
//       id: 3,
//       question: "Who is you favourite character?",
//       type: "select",
//       options: [
//         { id: 1, value: "Harvey" },
//         { id: 2, value: "Mike" },
//         { id: 3, value: "Donna" },
//         { id: 4, value: "Jessica" },
//         { id: 5, value: "Louis" },
//         { id: 6, value: "Rachel" },
//       ],
//       isRequired: true,
//     },
//     {
//       id: 4,
//       question: "Would you recommend it to your friend?",
//       type: "radio",
//       options: [
//         { id: 1, value: "Yes" },
//         { id: 2, value: "No" },
//         { id: 3, value: "Maybe" },
//       ],
//       isRequired: true,
//     },
//   ],
//   users_assigned: [
//     {
//       id: 1,
//       user_name: "Harvey Specter",
//       user_email: "harvey.specter@pearsonhardman.com",
//     },
//     {
//       id: 2,
//       user_name: "Mike Ross",
//       user_email: "mike.ross@pearsonhardman.com",
//     },
//     {
//       id: 3,
//       user_name: "Donna Paulsen",
//       user_email: "donna.paulsen@pearsonhardman.com",
//     },
//     {
//       id: 4,
//       user_name: "Rachel Zane",
//       user_email: "rachel.zane@pearsonhardman.com",
//     },
//     {
//       id: 5,
//       user_name: "Louis Litt",
//       user_email: "louis.litt@pearsonhardman.com",
//     },
//   ],
// };
