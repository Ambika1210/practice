getAllTeachers = async (req, res) => {
    try {
      const instituteId = getInstituteId();

      if (!instituteId) {
        logger.error(`TeacherController >>>> getAllTeachers >>>> Missing institute ID in token`);
        return setBadRequest(res, { message: 'Institute ID is required. User must belong to an institute.' });
      }
