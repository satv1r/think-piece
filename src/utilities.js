export const colledIdsAndDocs = (doc) => {
  return { id: doc.id, ...doc.data() };
};
