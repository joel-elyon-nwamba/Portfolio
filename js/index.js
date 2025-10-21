import openAI from "openai"



const release = () => {
    const messages = [
        {
            role: "system",
            content: ""
        },
        {
            role: "user",
            content: " "
        }
    ]
    try {
        const openai = new openAI({
        
        })

        const response = await openai.chat.completions.create({
            model: "gpt-5",
            messags: messages
        })

    } catch(err) {

    }
}