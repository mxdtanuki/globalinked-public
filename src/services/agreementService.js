// Dummy Agreement Service with mock data

// Dummy country data with stock flag URLs from flagcdn.com
const DUMMY_COUNTRIES = [
  { code: 'JP', name: 'Japan', flag: 'https://flagcdn.com/w80/jp.png' },
  { code: 'KR', name: 'South Korea', flag: 'https://flagcdn.com/w80/kr.png' },
  { code: 'SG', name: 'Singapore', flag: 'https://flagcdn.com/w80/sg.png' },
  { code: 'TH', name: 'Thailand', flag: 'https://flagcdn.com/w80/th.png' },
  { code: 'MY', name: 'Malaysia', flag: 'https://flagcdn.com/w80/my.png' },
  { code: 'ID', name: 'Indonesia', flag: 'https://flagcdn.com/w80/id.png' },
  { code: 'VN', name: 'Vietnam', flag: 'https://flagcdn.com/w80/vn.png' },
  { code: 'CN', name: 'China', flag: 'https://flagcdn.com/w80/cn.png' },
  { code: 'TW', name: 'Taiwan', flag: 'https://flagcdn.com/w80/tw.png' },
  { code: 'AU', name: 'Australia', flag: 'https://flagcdn.com/w80/au.png' },
  { code: 'US', name: 'United States', flag: 'https://flagcdn.com/w80/us.png' },
  { code: 'GB', name: 'United Kingdom', flag: 'https://flagcdn.com/w80/gb.png' },
  { code: 'FR', name: 'France', flag: 'https://flagcdn.com/w80/fr.png' },
  { code: 'DE', name: 'Germany', flag: 'https://flagcdn.com/w80/de.png' },
  { code: 'CA', name: 'Canada', flag: 'https://flagcdn.com/w80/ca.png' },
];

// Dummy universities with regions
const DUMMY_UNIVERSITIES = [
  { name: 'Tokyo Institute of Technology', region: 'Eastern Asia' },
  { name: 'National University of Singapore', region: 'South-Eastern Asia' },
  { name: 'Seoul National University', region: 'Eastern Asia' },
  { name: 'Chulalongkorn University', region: 'South-Eastern Asia' },
  { name: 'University of Malaya', region: 'South-Eastern Asia' },
  { name: 'Universitas Indonesia', region: 'South-Eastern Asia' },
  { name: 'Vietnam National University', region: 'South-Eastern Asia' },
  { name: 'Tsinghua University', region: 'Eastern Asia' },
  { name: 'National Taiwan University', region: 'Eastern Asia' },
  { name: 'University of Sydney', region: 'Oceania' },
  { name: 'Stanford University', region: 'North America' },
  { name: 'Oxford University', region: 'Northern Europe' },
  { name: 'Sorbonne University', region: 'Western Europe' },
  { name: 'Technical University of Munich', region: 'Western Europe' },
  { name: 'University of Toronto', region: 'North America' },
];

// Region mapping for countries (for future use)
// const REGION_MAP = {
//   'JP': 'Eastern Asia',
//   'KR': 'Eastern Asia',
//   'SG': 'South-Eastern Asia',
//   'TH': 'South-Eastern Asia',
//   'MY': 'South-Eastern Asia',
//   'ID': 'South-Eastern Asia',
//   'VN': 'South-Eastern Asia',
//   'CN': 'Eastern Asia',
//   'TW': 'Eastern Asia',
//   'AU': 'Oceania',
//   'US': 'North America',
//   'GB': 'Northern Europe',
//   'FR': 'Western Europe',
//   'DE': 'Western Europe',
//   'CA': 'North America',
// };

// Generate dummy agreements
const generateDummyAgreements = (count = 50) => {
  const agreements = [];
  const types = ['MOU', 'MOA'];
  const categories = [
    'Student Exchange',
    'Faculty Exchange',
    'Research Collaboration',
    'Cultural Exchange',
    'Conference Co-Hosting',
    'Student Internship',
  ];

  for (let i = 0; i < count; i++) {
    const country = DUMMY_COUNTRIES[Math.floor(Math.random() * DUMMY_COUNTRIES.length)];
    const university = DUMMY_UNIVERSITIES[Math.floor(Math.random() * DUMMY_UNIVERSITIES.length)];
    const startYear = 2020 + Math.floor(Math.random() * 5);
    const duration = 3 + Math.floor(Math.random() * 3); // 3-5 years
    const docType = types[Math.floor(Math.random() * types.length)];
    const isActive = Math.random() > 0.2;
    
    agreements.push({
      id: i + 1,
      institution: university.name,
      partner_name: university.name,
      institution_name: university.name,
      university_name: university.name,
      country: country.name,
      countryCode: country.code,
      flagUrl: country.flag,
      type: docType,
      document_type: docType,
      category: categories[Math.floor(Math.random() * categories.length)],
      startDate: `${startYear}-01-15`,
      endDate: `${startYear + duration}-01-14`,
      status: isActive ? 'Active' : 'Expired',
      agreement_status: isActive ? 'Active' : 'Expired',
      description: `Partnership agreement for academic collaboration and exchange programs.`,
      region: university.region,
      logo_path: `https://via.placeholder.com/150/0056b3/ffffff?text=${university.name.split(' ').map(w => w[0]).join('')}`,
      logo: `https://via.placeholder.com/150/0056b3/ffffff?text=${university.name.split(' ').map(w => w[0]).join('')}`,
      university_logo: `https://via.placeholder.com/150/0056b3/ffffff?text=${university.name.split(' ').map(w => w[0]).join('')}`,
    });
  }
  
  return agreements;
};

const DUMMY_AGREEMENTS = generateDummyAgreements(50);

// Service functions
export const agreementService = {
  // Get all agreements
  getAllAgreements: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DUMMY_AGREEMENTS);
      }, 500);
    });
  },

  // Get agreements by filter
  getAgreements: async (filters = {}) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        let filtered = [...DUMMY_AGREEMENTS];

        if (filters.country) {
          filtered = filtered.filter(a => a.country === filters.country);
        }
        if (filters.type) {
          filtered = filtered.filter(a => a.type === filters.type);
        }
        if (filters.status) {
          filtered = filtered.filter(a => a.status === filters.status);
        }
        if (filters.search) {
          const search = filters.search.toLowerCase();
          filtered = filtered.filter(a => 
            a.institution.toLowerCase().includes(search) ||
            a.country.toLowerCase().includes(search)
          );
        }

        resolve(filtered);
      }, 300);
    });
  },

  // Get country statistics
  getCountryStats: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const stats = DUMMY_COUNTRIES.map(country => ({
          country: country.name,
          countryCode: country.code,
          flagUrl: country.flag,
          count: DUMMY_AGREEMENTS.filter(a => a.countryCode === country.code).length,
        })).filter(s => s.count > 0);

        resolve(stats);
      }, 300);
    });
  },

  // Get total counts
  getTotalCounts: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          totalAgreements: DUMMY_AGREEMENTS.length,
          totalCountries: new Set(DUMMY_AGREEMENTS.map(a => a.country)).size,
          totalInstitutions: new Set(DUMMY_AGREEMENTS.map(a => a.institution)).size,
          activeAgreements: DUMMY_AGREEMENTS.filter(a => a.status === 'Active').length,
        });
      }, 300);
    });
  },

  // Get countries list
  getCountries: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const uniqueCountries = [...new Set(DUMMY_AGREEMENTS.map(a => a.country))];
        resolve(uniqueCountries.sort());
      }, 200);
    });
  },

  // Get public agreements (for public-facing pages)
  getPublicAgreements: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(DUMMY_AGREEMENTS);
      }, 500);
    });
  },

  // Get public partners (for partner institutions page)
  getPublicPartners: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        // Create unique partner entries
        const partners = DUMMY_AGREEMENTS.map(agreement => ({
          name: agreement.partner_name,
          partner_name: agreement.partner_name,
          country: agreement.country,
          region: agreement.region,
          logo_path: agreement.logo_path,
          logo: agreement.logo,
          logo_url: agreement.logo_path,
        }));
        resolve(partners);
      }, 400);
    });
  },
};

export default agreementService;
