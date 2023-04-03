import { Company, Job } from "./db.js";

// resolvers are functions that return data for a particular field in a schema -
// when you request a field, the resolver for that field is called to fetch the data for that field.

export const resolvers = {
  // These resolvers are triggered when you request a field on the Query type.
  Query: {
    job: async (_root, args) => Job.findById(args.id),
    jobs: async () => Job.findAll(),
    company: async (_root, args) => Company.findById(args.id),
    companies: async () => Company.findAll(),
  },

  Mutations: {
    createJob: async (_root, { title, companyId, description }) => {
      return Job.create({ title, companyId, description });
    },
  },

  // These resolvers are triggered when you request a field on the Job type.
  Job: {
    // Whenever the company field within the job type is requested, this resolver is called.
    company: async (job) => Company.findById(job.companyId),
  },

  Company: {
    jobs: async (company) => Job.findAll((job) => job.companyId === company.id),
  },
};
