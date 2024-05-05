import axios from "axios";

const signup = (
  email: string,
  password: string,
  planVersionId: number,
  termsAndConditions: boolean
) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`,
    {
      email,
      password,
      planVersionId,
      termsAndConditions,
    },
    { headers: { "Accept-Language": "en" } }
  );
};

export default signup;
