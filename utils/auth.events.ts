export type AuthExpiredHandler = () => void;

const listeners = new Set<AuthExpiredHandler>();

export const onAuthExpired = (cb: AuthExpiredHandler) => {
  listeners.add(cb);
  return () => listeners.delete(cb);
};

export const removeAuthExpiredListener = (cb: AuthExpiredHandler) => {
  listeners.delete(cb);
};

export const emitAuthExpired = () => {
  for (const cb of Array.from(listeners)) {
    try {
      cb();
    } catch (e) {
      
      console.error('onAuthExpired handler error', e);
    }
  }
};
