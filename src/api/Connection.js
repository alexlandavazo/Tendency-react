import axios from "axios";
export const api = () => {
  const bearerToken =
    "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJwUGFINU55VXRxTUkzMDZtajdZVHdHV3JIZE81cWxmaCIsImlhdCI6MTYwNTY0NDA0NzA1OH0.skfIY_7CAANkxmhoq37OI4jYRE8flx1ENq1v1VaRevJiroYNFQYz7Oy6hL1YZ1OJkevXSQFuLMHTqY0w6d5nPQ";
  return axios.create({
    baseURL: "https://eshop-deve.herokuapp.com/api/v2/",
    timeout: 0,
    headers: {
      Authorization: bearerToken,
      "Content-Type": "application/json",
    },
  });
};
