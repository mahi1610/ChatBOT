import openai from "./chatGPT";

const query = async (prompt: string, model: string) => {
  const res = await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: "Hello",
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((res) => res.data.choices[0].text)
    .catch(
      (err) => `ChatGPT wasn't able to find an answer! (Error: ${err.message})`
    );
  return res;
};

export default query;