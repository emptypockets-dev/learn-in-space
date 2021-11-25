export default function handler(req, res) {
  const formBody = JSON.parse(req.body);
  // get parts of the card from the form
  const title = formBody.title;
  // const question = formBody.question;
  // const codeQuestion = formBody.codeQuestion;
  // const codeAnswer = formBody.codeAnswer;
  // make a post request to the sandbox api
  // const sandboxId = await createSandboxId(codeQuestion, codeAnswer);
  // add that card to svelte store
  // createNewCard(question, answer, sandboxId);
  // return a successfully created message
  // return {
  // body: {
  // title,
  // question,
  // sandboxId,
  // codeQuestion,
  // codeAnswer
  // }
  // };
  res.status(200).json({ title: title });
}
