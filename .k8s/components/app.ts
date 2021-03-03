import env from "@kosko/env";

import { create } from "@socialgouv/kosko-charts/components/nginx";
import type { Ingress } from "kubernetes-models/api/networking/v1beta1/Ingress";

const manifests = create("app", {
  env,
});

// @ts-ignore
const ingress = manifests.find(({ kind }) => kind === "Ingress") as Ingress;

ingress.metadata = {
  ...ingress.metadata,
  annotations: {
    ...ingress.metadata?.annotations,
    "nginx.ingress.kubernetes.io/configuration-snippet": `if ($request_uri ~* \\.(js|css|gif|jpe?g|png)) { expires 1y; add_header Cache-Control "max-age=31556952, public"; }`
  },
}

export default manifests;
