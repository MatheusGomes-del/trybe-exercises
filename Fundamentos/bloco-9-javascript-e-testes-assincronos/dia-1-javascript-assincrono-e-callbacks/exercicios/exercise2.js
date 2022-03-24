const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

// crie a função sendMarsTemperature abaixo

const sendMarsTemperature = () => {
  const delay = messageDelay()
  setTimeout(() => console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`), delay)
}

sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo