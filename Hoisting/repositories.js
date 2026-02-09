export const findInstituteById = async (instituteId) => {
  return await Institute.findById(instituteId);
};