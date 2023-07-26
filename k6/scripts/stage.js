import http from "k6/http";
import { sleep, check } from "k6";

export const options = {
  stages: [
    { duration: "5m", target: 100 },
    { duration: "10m", target: 100 },
    { duration: "5m", target: 0 },
  ],
  thresholds: { http_req_duration: ["avg<100", "p(95)<200"] },
  noConnectionReuse: true,
  userAgent: "MyK6UserAgentString/1.0",
};

export default function () {
  const url = "http://localhost:8080/api/v1/books";
  const payload = JSON.stringify({
    userId: "f9ad3dee-0782-40ad-a513-0f9e8a26ed84",
    title: "aaa",
    image: "aaaaa",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  http.post(url, payload, params);
}
