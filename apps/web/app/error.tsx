"use client";
export default ({ error, reset }: { error: Error ,reset: () => void }) => <div>{error.message}</div>