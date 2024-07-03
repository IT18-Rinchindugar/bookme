import LogRocket from "logrocket";

export default function initializeLogRocket() {
  // eslint-disable-next-line turbo/no-undeclared-env-vars
  const LOGROCKET_ID: string = process?.env?.NEXT_PUBLIC_LOGROCKET_ID || "";
  LogRocket.init(LOGROCKET_ID);
}
