import { gql, useMutation } from "@apollo/client";

const LOGIN = gql`
mutation login($input: UserCredentials!) {
  login (input: $input)
}
`
export const  UseLoginMutation= () => {
    const [ loginMutation, {loading, error}] = useMutation(LOGIN)
    return { loginMutation, loading, error }
}