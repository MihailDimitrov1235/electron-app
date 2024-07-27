import React, { useState } from 'react';
import TextField from '../../TextField';
import Button from '../../Button';
import { useAuth } from '../../Contexts/AuthContext';

export default function ProfileTab() {
  const { token, setToken } = useAuth();
  const [authToken, setAuthToken] = useState(token || undefined);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthToken(event.target.value);
  };

  const handleApplyToken = () => {
    setToken(authToken || null);
  };
  return (
    <div className="flex gap-2">
      <span>Manually set Anilist token</span>
      <TextField title="Token" value={authToken} onChange={handleChange} />
      <Button onClick={handleApplyToken} variant="gradient">
        Apply
      </Button>
    </div>
  );
}
