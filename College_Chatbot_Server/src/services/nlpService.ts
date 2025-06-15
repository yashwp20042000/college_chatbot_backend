
export const generateNlpResponse = (message: string): string => {
  const input = message.toLowerCase();
  
  // Greetings
  if (/hello|hi|hey/.test(input)) {
    return "Hello! How can I assist you with your college needs today?";
  }
  
  // Time/Date
  if (/time|date/.test(input)) {
    return `Current date/time is: ${new Date().toLocaleString()}`;
  }
  
  // Calculations
  const mathMatch = input.match(/(\d+)\s*([+\-*/])\s*(\d+)/);
  if (mathMatch) {
    const [_, a, op, b] = mathMatch;
    const num1 = parseFloat(a);
    const num2 = parseFloat(b);
    
    switch (op) {
      case '+': return `Result: ${num1 + num2}`;
      case '-': return `Result: ${num1 - num2}`;
      case '*': return `Result: ${num1 * num2}`;
      case '/': return `Result: ${num1 / num2}`;
    }
  }
  
  // Default
  return "I'm a college assistant bot. I can help with general questions, calculations, and more. What would you like to know?";
};
