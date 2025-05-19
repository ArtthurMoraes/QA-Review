import openai

openai.api_key = "SUA_CHAVE"

prompt = "Crie casos de teste para um sistema de carrinho de compras online"
response = openai.ChatCompletion.create(
  model="gpt-3.5-turbo",
  messages=[{"role": "user", "content": prompt}]
)

print(response['choices'][0]['message']['content'])