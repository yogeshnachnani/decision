export async function handleRequest(request: Request): Promise<Response> {

  function shouldDoIt(): String {
    var randomNumber = Math.floor(Math.random() * 10);
    return `Random number is ${randomNumber}, Which Means ${randomNumber % 2 == 0 ? "Yes!" : "Noooooo!!!"}`;
  }

  const { searchParams } = new URL(request.url);
  const numIterations: number = searchParams.get('rolls') != null ? + searchParams.get('rolls')! : 3;

  var responseString = `Rolling ${numIterations} times for you.. \n`;

  for(let i = 0; i < numIterations; i++) {
    responseString = responseString + shouldDoIt() + "\n";
  }

  return new Response(`${responseString}`);
}
