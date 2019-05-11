# Ticket Booking ChatBOT using AWS LEX

This is sample demo/guide on how to interact with AWS lex Chatbot and use it to save data (In our case User Data in AWS DynamoDB) in a database.

# Pre-Requistics :
  - An AWS Account(any i.e free tier as well)
  - Basic knowledge of Node/JavaScript and AWS 

# Basic requirements/setup

  - AWS SDK (npm install aws-sdk)
  - install NodeJs(This is not mandatory since you can also code directly in the AWS Lambda)
  - Create AWS DynamoDB Table with a valid table name
  - Create a Lambda Function

# Steps :
> 1. Go to the AWS Management Console
> 2. Select Amazon Lex and click create 
> 3. Select custom  bot
> 4. Select a Bot Name and Voice then click create
> 5. Create an Intent(In our Case bookTickets)
> 6. Create sample Utterances like book a ticket, can you book, etc
> 7. Create Slots ,In our case 4 slots : 1.[movie] 2.[name] 3.[day] 4.[time])
> 8. In the FulFillment menu, select AWS Lambda Function
> 9. Go to the AWS Console and create a Lambda function
> 10. Upload the source code(in zip format) in the lambda
> 11. Go back to your chatbot and select the AWS function you created from the fulmilment menu.
> 12. Click on Build and your chatbot will be ready!

#### Need More Help ?

See [Amazon LEX](https://docs.aws.amazon.com/lex/latest/dg/gs-bp-create-bot.html)


### Todos

 - Use NodeJs (8.0 or above)

License
----

Free


**Free Codes, Hell Yeah!**
**Follow For More ! https://github.com/pratikpr2**
