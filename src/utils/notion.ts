const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.REACT_APP_PUBLIC_NOTION_API_TOKEN,
});

export const submitData = async (formData: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  country: string;
  favoriteDish: string;
}) => {
  const { firstName, lastName, email, phoneNumber, country, favoriteDish } =
    formData;

  const res = await notion.pages.create({
    parent: {
      database_id: process.env.REACT_APP_PUBLIC_DATABASE_ID,
    },
    properties: {
      Title: {
        title: [
          {
            type: "text",
            text: {
              content: `${firstName} ${lastName}`,
            },
          },
        ],
      },
      Email: {
        email: [
          {
            type: "email",
            text: {
              content: email,
            },
          },
        ],
      },
      Content: {
        firstName: [
          {
            type: "text",
            text: {
              content: firstName,
            },
          },
        ],
        lastName: [
          {
            type: "text",
            text: {
              content: lastName,
            },
          },
        ],
        email: [
          {
            type: "email",
            text: {
              content: email,
            },
          },
        ],
        phoneNumber: [
          {
            type: "text",
            text: {
              content: phoneNumber,
            },
          },
        ],
        country: [
          {
            type: "text",
            text: {
              content: country,
            },
          },
        ],
        favoriteDish: [
          {
            type: "text",
            text: {
              content: favoriteDish,
            },
          },
        ],
      },
    },
  });

  console.log(res);

  return res;
};
