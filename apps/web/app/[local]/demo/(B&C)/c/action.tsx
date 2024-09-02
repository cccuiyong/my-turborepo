'use server';

export const sc = async (_: FormData) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("500‌"), 3000);
    });
}
