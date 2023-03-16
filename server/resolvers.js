import { Company, Job } from "./db.js";

export const resolvers = {
  Query: {
    jobs: async () => Job.findAll(),
  },

  Job: {
    company: async (job) => Company.findById(job.companyId),
  },
};
