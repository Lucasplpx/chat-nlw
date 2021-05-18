import { http, PORT } from './http';
import './websocket/client';

http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
