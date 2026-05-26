import { useState } from "react";
import axios from "axios";

function GitHubProfile() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const fetchUser = async () => {
    if (!token) {
      setError("토큰을 입력해주세요");
      return;
    }

    setError(null);

    try {
      // TODO 1️⃣: axios.get으로 GitHub API에 요청 보내기
      // URL: https://api.github.com/user
      // headers에 Authorization: `Bearer ${token}` 부착


      // TODO 2️⃣: 응답 데이터(response.data)를 user state에 저장


    } catch (err) {
      // TODO 3️⃣: 에러 발생 시 적절한 메시지를 error state에 저장
      // 힌트: err.response?.status === 401 인 경우 따로 처리

    }
  };

  return (
    <div className="container">
      <div className="input-section">
        <input
          type="password"
          value={token}
          onChange={(e) => setToken(e.target.value)}
          placeholder="GitHub 토큰 (ghp_...)"
          className="token-input"
        />
        <button onClick={fetchUser}>내 정보 가져오기</button>
      </div>

      {error && <p className="error">{error}</p>}

      {/* TODO 4️⃣: user가 있을 때 프로필 정보를 표시하세요 */}
      {/* 힌트: user.avatar_url, user.name, user.followers 등 */}

    </div>
  );
}

export default GitHubProfile;