const generateKey = () => {
   //Generate key automatically 
    const randomNum = Math.floor(Math.random() * 10000);

    // Add MIG before the key is generated
    return `MIG${randomNum}`;
  };

//   SybmitForm takes in 4 field from a form
  export const submitForm = async (full_name: string, cell_number: string, email: string, password: string) => {

    
    const key = generateKey();
    const response = await fetch('https://muhoko_form-1-q6650955.deta.app/form/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cell_number,
        email,
        full_name,
        key,
        password,
      }),
    });
  
    if (response.ok) {
      console.log('Form submitted successfully');
    } else {
      console.error('Error submitting form');
    }
  };
  