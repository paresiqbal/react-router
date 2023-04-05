import { Form, redirect } from "react-router-dom";

export default function Contact() {
  return (
    <div>
      <Form method="post" action="/help/contact" className="flex flex-col">
        <label>Name :</label>
        <input type="text" name="name" />

        <label>Email :</label>
        <input type="email" name="email" />

        <label>Message :</label>
        <input type="text" name="message" />
        <button>Submit</button>
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();

  const submision = {
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  };

  console.log(submision);
  return redirect("/");
};
