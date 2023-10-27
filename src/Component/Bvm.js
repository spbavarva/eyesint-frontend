import React from 'react';

function Bvmport() {
  return (
    <div>
      <p>port:21/tcp open ftp</p>
      <p>port:80/tcp open http</p>
      <p>port:443/tcp open https</p>
      <p>port:445/tcp open microsoft-ds</p>
      <p>port:512/tcp open exec</p>
      <p>port:554/tcp open rtsp</p>
      <p>port:1723/tcp open pptp</p>
      <p>port:3306/tcp open postgresql</p>
      <p>port:8888/tcp open sun-answerbook</p>
    </div>
  );
}

export default Bvmport;
