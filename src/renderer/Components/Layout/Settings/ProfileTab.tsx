import React, { useState } from 'react';
import Button from '@Components/Button';
import { useAuth } from '@Components/Contexts/AuthContext';
import TextField from '@Components/TextField';

export default function ProfileTab() {
  const { token, setToken } = useAuth();
  const [authToken, setAuthToken] = useState(token || undefined);

  const handleChange = (newValue: string) => {
    setAuthToken(newValue);
  };

  const handleApplyToken = () => {
    setToken(authToken || null);
  };
  return (
    <div className="flex gap-2">
      <span>Manually set Anilist token</span>
      <TextField
        title="Token"
        value={authToken || ''}
        onChange={handleChange}
      />
      <Button onClick={handleApplyToken} variant="gradient">
        Apply
      </Button>
    </div>
  );
}
