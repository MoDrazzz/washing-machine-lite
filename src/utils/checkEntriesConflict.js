export const checkEntriesConflict = (entries) => {
  const sortedEntries = [...entries].sort((entryA, entryB) =>
    new Date(entryA.start) - new Date(entryB.start)
  );

  for (let i = 0; i < sortedEntries.length - 1; i++) {
    const currentEndTime = sortedEntries[i].end;
    const nextStartTime = sortedEntries[i + 1].start;

    if (new Date(currentEndTime) > new Date(nextStartTime)) {
      return true;
    }
  }

  return false;
};