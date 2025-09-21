// Test Web3Forms email integration
export const testWeb3Forms = async () => {
  try {
    console.log('Testing Web3Forms integration...');
    
    const testData = {
      access_key: '01bddc87-096a-4177-ad07-aea73c4d0324', // Your Web3Forms access key
      name: 'Test User',
      email: 'test@example.com',
      phone: '1234567890',
      company: 'Test Company',
      subject: 'Test Email',
      message: 'This is a test email from EL-Nuby website',
      to: 'ahmedvrgaming@gmail.com',
      from_name: 'Test User',
      reply_to: 'test@example.com',
      form_type: 'Test',
      website: 'EL-Nuby Website'
    };

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    if (response.ok) {
      console.log('✅ Web3Forms test successful!');
      console.log('Response:', await response.json());
      return true;
    } else {
      console.error('❌ Web3Forms test failed:', response.status);
      return false;
    }
  } catch (error) {
    console.error('❌ Web3Forms test error:', error);
    return false;
  }
};

// Usage: Call testWeb3Forms() in browser console to test
