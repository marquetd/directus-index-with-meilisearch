export type Abstract = {
  accepted?: boolean | null;
  assignCandidate?: string | null;
  authors: any[] | AbstractAuthor[];
  comment?: string | null;
  content?: string | null;
  creationMailDate?: string | null;
  finalType?: string | null;
  id: number;
  mainEventRegistration?: number | MainEventRegistration | null;
  mainEventSession?: number | MainEventSession | null;
  name: string;
  reference?: string | null;
  thematique?: number | Thematique | null;
  theme?: string | null;
  type?: string | null;
  validationMailDate?: string | null;
};

export type AbstractAuthor = {
  abstract?: number | Abstract | null;
  civilite?: string | null;
  firstName: string;
  id: number;
  lastName?: string | null;
  person?: number | Person | null;
  sort?: number | null;
  speaker?: boolean | null;
  structures: any[] | AbstractAuthorStructure[];
};

export type AbstractAuthorStructure = {
  author?: number | AbstractAuthor | null;
  id: number;
  name: string;
  structure?: number | Structure | null;
};

export type CallForProject = {
  budget?: number | null;
  description?: string | null;
  expertFile?: string | DirectusFiles | null;
  forms: any[] | Form[];
  id: number;
  image?: string | DirectusFiles | null;
  lang?: string | null;
  managed?: boolean | null;
  name?: string | null;
  organisateurs: any[] | CallForProjectPerson[];
  status: string;
  structures: any[] | CallForProjectStructure[];
  thematiques: any[] | CallForProjectThematique[];
  type?: number | CallForProjectType | null;
  year?: number | null;
};

export type CallForProjectPerson = {
  CallForProject_id?: number | CallForProject | null;
  id: number;
  Person_id?: number | Person | null;
};

export type CallForProjectStructure = {
  CallForProject_id?: number | CallForProject | null;
  id: number;
  Structure_id?: number | Structure | null;
};

export type CallForProjectThematique = {
  CallForProject_id?: number | CallForProject | null;
  id: number;
  thematique_id?: number | Thematique | null;
};

export type CallForProjectType = {
  description?: string | null;
  id: number;
  name?: string | null;
};

export type DirectusAccess = {
  id: string;
  policy: string | DirectusPolicies;
  role?: string | DirectusRoles | null;
  sort?: number | null;
  user?: string | DirectusUsers | null;
};

export type DirectusActivity = {
  action: string;
  collection: string;
  id: number;
  ip?: string | null;
  item: string;
  origin?: string | null;
  revisions: any[] | DirectusRevisions[];
  timestamp: string;
  user?: string | DirectusUsers | null;
  user_agent?: string | null;
};

export type DirectusCollections = {
  accountability?: string | null;
  archive_app_filter: boolean;
  archive_field?: string | null;
  archive_value?: string | null;
  collapse: string;
  collection: string;
  color?: string | null;
  display_template?: string | null;
  group?: string | DirectusCollections | null;
  hidden: boolean;
  icon?: string | null;
  item_duplication_fields?: unknown | null;
  note?: string | null;
  preview_url?: string | null;
  singleton: boolean;
  sort?: number | null;
  sort_field?: string | null;
  translations?: unknown | null;
  unarchive_value?: string | null;
  versioning: boolean;
};

export type DirectusComments = {
  collection: string | DirectusCollections;
  comment: string;
  date_created?: string | null;
  date_updated?: string | null;
  id: string;
  item: string;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type DirectusDashboards = {
  color?: string | null;
  date_created?: string | null;
  icon: string;
  id: string;
  name: string;
  note?: string | null;
  panels: any[] | DirectusPanels[];
  user_created?: string | DirectusUsers | null;
};

export type DirectusExtensions = {
  bundle?: string | null;
  enabled: boolean;
  folder: string;
  id: string;
  source: string;
};

export type DirectusFields = {
  collection: string | DirectusCollections;
  conditions?: unknown | null;
  display?: string | null;
  display_options?: unknown | null;
  field: string;
  group?: string | DirectusFields | null;
  hidden: boolean;
  id: number;
  interface?: string | null;
  note?: string | null;
  options?: unknown | null;
  readonly: boolean;
  required?: boolean | null;
  sort?: number | null;
  special?: unknown | null;
  translations?: unknown | null;
  validation?: unknown | null;
  validation_message?: string | null;
  width?: string | null;
};

export type DirectusFiles = {
  charset?: string | null;
  created_on: string;
  description?: string | null;
  duration?: number | null;
  embed?: string | null;
  filename_disk?: string | null;
  filename_download: string;
  filesize?: number | null;
  focal_point_x?: number | null;
  focal_point_y?: number | null;
  folder?: string | DirectusFolders | null;
  height?: number | null;
  id: string;
  location?: string | null;
  mainEventRegistration?: number | MainEventRegistration | null;
  metadata?: unknown | null;
  modified_by?: string | DirectusUsers | null;
  modified_on: string;
  projectProposal?: number | ProjectProposal | null;
  showToExpert?: boolean | null;
  storage: string;
  tags?: unknown | null;
  title?: string | null;
  tus_data?: unknown | null;
  tus_id?: string | null;
  type?: string | null;
  uploaded_by?: string | DirectusUsers | null;
  uploaded_on?: string | null;
  width?: number | null;
};

export type DirectusFlows = {
  accountability?: string | null;
  color?: string | null;
  date_created?: string | null;
  description?: string | null;
  flow_manager_category?: string | null;
  flow_manager_order?: number | null;
  icon?: string | null;
  id: string;
  name: string;
  operation?: string | DirectusOperations | null;
  operations: any[] | DirectusOperations[];
  options?: unknown | null;
  status: string;
  trigger?: string | null;
  user_created?: string | DirectusUsers | null;
};

export type DirectusFolders = {
  id: string;
  name: string;
  parent?: string | DirectusFolders | null;
};

export type DirectusMigrations = {
  name: string;
  timestamp?: string | null;
  version: string;
};

export type DirectusNotifications = {
  collection?: string | null;
  id: number;
  item?: string | null;
  message?: string | null;
  recipient: string | DirectusUsers;
  sender?: string | DirectusUsers | null;
  status?: string | null;
  subject: string;
  timestamp?: string | null;
};

export type DirectusOperations = {
  date_created?: string | null;
  flow: string | DirectusFlows;
  id: string;
  key: string;
  name?: string | null;
  options?: unknown | null;
  position_x: number;
  position_y: number;
  reject?: string | DirectusOperations | null;
  resolve?: string | DirectusOperations | null;
  type: string;
  user_created?: string | DirectusUsers | null;
};

export type DirectusPanels = {
  color?: string | null;
  dashboard: string | DirectusDashboards;
  date_created?: string | null;
  height: number;
  icon?: string | null;
  id: string;
  name?: string | null;
  note?: string | null;
  options?: unknown | null;
  position_x: number;
  position_y: number;
  show_header: boolean;
  type: string;
  user_created?: string | DirectusUsers | null;
  width: number;
};

export type DirectusPermissions = {
  action: string;
  collection: string;
  fields?: unknown | null;
  id: number;
  permissions?: unknown | null;
  policy: string | DirectusPolicies;
  presets?: unknown | null;
  validation?: unknown | null;
};

export type DirectusPolicies = {
  admin_access: boolean;
  app_access: boolean;
  description?: string | null;
  enforce_tfa: boolean;
  icon: string;
  id: string;
  ip_access?: unknown | null;
  name: string;
  permissions: any[] | DirectusPermissions[];
  roles: any[] | DirectusAccess[];
  users: any[] | DirectusAccess[];
};

export type DirectusPresets = {
  bookmark?: string | null;
  collection?: string | null;
  color?: string | null;
  filter?: unknown | null;
  icon?: string | null;
  id: number;
  layout?: string | null;
  layout_options?: unknown | null;
  layout_query?: unknown | null;
  refresh_interval?: number | null;
  role?: string | DirectusRoles | null;
  search?: string | null;
  user?: string | DirectusUsers | null;
};

export type DirectusRelations = {
  id: number;
  junction_field?: string | null;
  many_collection: string;
  many_field: string;
  one_allowed_collections?: unknown | null;
  one_collection?: string | null;
  one_collection_field?: string | null;
  one_deselect_action: string;
  one_field?: string | null;
  sort_field?: string | null;
};

export type DirectusRevisions = {
  activity: number | DirectusActivity;
  collection: string;
  data?: unknown | null;
  delta?: unknown | null;
  id: number;
  item: string;
  parent?: number | DirectusRevisions | null;
  version?: string | DirectusVersions | null;
};

export type DirectusRoles = {
  children: any[] | DirectusRoles[];
  description?: string | null;
  icon: string;
  id: string;
  name: string;
  parent?: string | DirectusRoles | null;
  policies: any[] | DirectusAccess[];
  users: any[] | DirectusUsers[];
  users_group: string;
};

export type DirectusSessions = {
  expires: string;
  ip?: string | null;
  next_token?: string | null;
  origin?: string | null;
  share?: string | DirectusShares | null;
  token: string;
  user?: string | DirectusUsers | null;
  user_agent?: string | null;
};

export type DirectusSettings = {
  accepted_terms?: boolean | null;
  ai_group: string;
  auth_login_attempts?: number | null;
  auth_password_policy?: string | null;
  basemaps?: unknown | null;
  custom_aspect_ratios?: unknown | null;
  custom_css?: string | null;
  default_appearance: string;
  default_language: string;
  default_theme_dark?: string | null;
  default_theme_light?: string | null;
  id: number;
  mapbox_key?: string | null;
  mcp_allow_deletes: boolean;
  mcp_enabled: boolean;
  mcp_prompts_collection?: string | null;
  mcp_prompts_collection_validation: string;
  mcp_system_prompt?: string | null;
  mcp_system_prompt_enabled: boolean;
  module_bar?: unknown | null;
  project_color: string;
  project_descriptor?: string | null;
  project_id?: string | null;
  project_logo?: string | DirectusFiles | null;
  project_name: string;
  project_url?: string | null;
  public_background?: string | DirectusFiles | null;
  public_favicon?: string | DirectusFiles | null;
  public_foreground?: string | DirectusFiles | null;
  public_note?: string | null;
  public_registration: boolean;
  public_registration_email_filter?: unknown | null;
  public_registration_role?: string | DirectusRoles | null;
  public_registration_verify_email: boolean;
  report_bug_url?: string | null;
  report_error_url?: string | null;
  report_feature_url?: string | null;
  storage_asset_presets?: unknown | null;
  storage_asset_transform?: string | null;
  storage_default_folder?: string | DirectusFolders | null;
  theme_dark_overrides?: unknown | null;
  theme_light_overrides?: unknown | null;
  theming_group: string;
  visual_editor_urls?: unknown | null;
};

export type DirectusShares = {
  collection: string | DirectusCollections;
  date_created?: string | null;
  date_end?: string | null;
  date_start?: string | null;
  id: string;
  item: string;
  max_uses?: number | null;
  name?: string | null;
  password?: string | null;
  role?: string | DirectusRoles | null;
  times_used?: number | null;
  user_created?: string | DirectusUsers | null;
};

export type DirectusSyncIdMap = {
  created_at?: string | null;
  id: number;
  local_id: string;
  sync_id: string;
  table: string;
};

export type DirectusTranslations = {
  id: string;
  key: string;
  language: string;
  value: string;
};

export type DirectusUsers = {
  appearance?: string | null;
  auth_data?: unknown | null;
  avatar?: string | DirectusFiles | null;
  description?: string | null;
  email?: string | null;
  email_notifications?: boolean | null;
  external_identifier?: string | null;
  first_name?: string | null;
  id: string;
  language?: string | null;
  last_access?: string | null;
  last_name?: string | null;
  last_page?: string | null;
  location?: string | null;
  password?: string | null;
  person?: number | Person | null;
  policies: any[] | DirectusAccess[];
  provider: string;
  role?: string | DirectusRoles | null;
  status: string;
  tags?: unknown | null;
  text_direction: string;
  tfa_secret?: string | null;
  theme_dark?: string | null;
  theme_dark_overrides?: unknown | null;
  theme_light?: string | null;
  theme_light_overrides?: unknown | null;
  title?: string | null;
  token?: string | null;
};

export type DirectusVersions = {
  collection: string | DirectusCollections;
  date_created?: string | null;
  date_updated?: string | null;
  delta?: unknown | null;
  hash?: string | null;
  id: string;
  item: string;
  key: string;
  name?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type DirectusWebhooks = {
  actions: unknown;
  collections: unknown;
  data: boolean;
  headers?: unknown | null;
  id: number;
  method: string;
  migrated_flow?: string | DirectusFlows | null;
  name: string;
  status: string;
  url: string;
  was_active_before_deprecation: boolean;
};

export type Documentation = {
  ancre?: string | null;
  content?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  emplacement?: string | DirectusFiles | null;
  id: number;
  section?: string | null;
  sort?: number | null;
  status: string;
  title?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type Evaluation = {
  comment?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  evaluationAnswers: any[] | FormEvaluationAnswer[];
  evaluationDate?: string | null;
  evaluationSession?: number | EvaluationSession | null;
  evaluator?: number | Person | null;
  id: number;
  status: string;
  submission?: number | FormSubmission | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type EvaluationField = {
  anchorField?: number | FormField | null;
  field?: number | FormField | null;
  id: number;
  session?: number | EvaluationSession | null;
};

export type EvaluationSession = {
  callForProject?: number | CallForProject | null;
  endDate?: string | null;
  evaluationFields: any[] | EvaluationField[];
  evaluations: any[] | Evaluation[];
  form?: number | Form | null;
  id: number;
  name?: string | null;
  startDate?: string | null;
};

export type ExpertiseDomain = {
  id: number;
  name?: string | null;
};

export type Form = {
  callForProject?: number | CallForProject | null;
  date_created?: string | null;
  date_updated?: string | null;
  endDate?: string | null;
  footer?: string | null;
  groups: any[] | FormGroup[];
  header?: string | null;
  id: number;
  identification?: boolean | null;
  isProjectForm?: boolean | null;
  mainEvent?: number | MainEvent | null;
  saveMailTemplate?: number | MailTemplate | null;
  showSearchPerson?: boolean | null;
  sort?: number | null;
  startDate?: string | null;
  status: string;
  submitMailTemplate?: number | MailTemplate | null;
  submitOnly?: boolean | null;
  survey?: number | Survey | null;
  title?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type FormAnswer = {
  field?: number | FormField | null;
  id: number;
  submission?: number | FormSubmission | null;
  value?: unknown | null;
};

export type FormEvaluationAnswer = {
  evaluation?: number | Evaluation | null;
  field?: number | FormField | null;
  id: number;
  value?: unknown | null;
};

export type FormField = {
  config?: unknown | null;
  criterion?: boolean | null;
  defaultValue?: string | null;
  group?: number | FormGroup | null;
  id: number;
  legend?: string | null;
  managementVariable?: boolean | null;
  maxLength?: number | null;
  name?: string | null;
  projectDescription?: boolean | null;
  projectProposalTitle?: boolean | null;
  required?: boolean | null;
  size?: unknown | null;
  sort?: number | null;
  type?: string | null;
};

export type FormGroup = {
  color?: string | null;
  fields: any[] | FormField[];
  form?: number | Form | null;
  hideToExpert?: boolean | null;
  hideToParticipant?: boolean | null;
  id: number;
  name: string;
  sort?: number | null;
};

export type FormSubmission = {
  answers: any[] | FormAnswer[];
  date_created?: string | null;
  date_saved?: string | null;
  date_submitted?: string | null;
  date_updated?: string | null;
  form?: number | Form | null;
  id: number;
  mainEventRegistration?: number | MainEventRegistration | null;
  projectProposal?: number | ProjectProposal | null;
  status?: string | null;
  surveyResponse?: number | SurveyResponse | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type Geosite = {
  id: number;
  name?: string | null;
};

export type Groupe = {
  description?: string | null;
  id: number;
  name?: string | null;
  people: any[] | GroupePerson[];
};

export type GroupePerson = {
  Groupe_id?: number | Groupe | null;
  id: number;
  Person_id?: number | Person | null;
};

export type Job = {
  endDate?: string | null;
  id: number;
  label?: string | null;
  metier?: number | Metier | null;
  person?: number | Person | null;
  sort?: number | null;
  startDate?: string | null;
  statut?: number | Statut | null;
  structure?: number | Structure | null;
  team?: number | Team | null;
};

export type Keywords = {
  id: number;
  name?: string | null;
};

export type MailServerStatus = {
  date_created?: string | null;
  id: number;
  status: string;
};

export type MailStatus = {
  content?: string | null;
  errorMessage?: string | null;
  id: number;
  mailTemplate?: number | MailTemplate | null;
  mainEventRegistration?: number | MainEventRegistration | null;
  projectProposal?: number | ProjectProposal | null;
  sendDate?: string | null;
  status: string;
  title?: string | null;
  to?: string | null;
};

export type MailTemplate = {
  callForProject?: number | CallForProject | null;
  content?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  id: number;
  mainEvent?: number | MainEvent | null;
  survey?: number | Survey | null;
  title?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type MainEvent = {
  askAddress?: boolean | null;
  bankInformation?: string | null;
  billAddress?: string | null;
  billManagement?: boolean | null;
  city?: string | null;
  days: any[] | MainEventDay[];
  description?: string | null;
  detailProgram?: string | null;
  email?: string | null;
  endDate?: string | null;
  estimatedBudget?: number | null;
  exceptedCoast?: number | null;
  expectedIncome?: number | null;
  expectedParticipation?: number | null;
  expectedProgram?: string | null;
  freeRegistration?: boolean | null;
  geom?: string | null;
  globalProgram?: string | null;
  id: number;
  information?: string | null;
  inscriptionLimitDate?: string | null;
  lang?: string | null;
  location?: string | null;
  locationInformation?: string | null;
  maxAbstractChar?: number | null;
  name?: string | null;
  options: any[] | MainEventOption[];
  oral?: boolean | null;
  oralCommunicationLimitDate?: string | null;
  phone?: string | null;
  poster?: boolean | null;
  posterLimitDate?: string | null;
  prefix?: string | null;
  prices: any[] | MainEventPrice[];
  result?: number | null;
  saveAbstractOMailTemplate?: number | MailTemplate | null;
  saveAbstractOPMailTemplate?: number | MailTemplate | null;
  saveAbstractPMailTemplate?: number | MailTemplate | null;
  startDate?: string | null;
  status: string;
  structure?: number | Structure | null;
  thematiques: any[] | MainEventThematique[];
  type?: number | MainEventType | null;
  webSite?: string | null;
};

export type MainEventThematique = {
  id: number;
  MainEvent_id?: number | MainEvent | null;
  thematique_id?: number | Thematique | null;
};

export type MainEventDay = {
  endDate?: string | null;
  id: number;
  mainEvent?: number | MainEvent | null;
  sessions: any[] | MainEventSession[];
  startDate?: string | null;
};

export type MainEventManagement = {
  id: number;
  mainEvent?: number | MainEvent | null;
  person?: number | Person | null;
  type?: string | null;
};

export type MainEventOption = {
  comment?: string | null;
  disabled?: boolean | null;
  id: number;
  mainEvent?: number | MainEvent | null;
  name?: string | null;
  price?: number | null;
  sort?: number | null;
};

export type MainEventPrice = {
  endDate?: string | null;
  id: number;
  mainEvent?: number | MainEvent | null;
  name?: string | null;
  price?: number | null;
  sort?: number | null;
  startDate?: string | null;
  status: any[] | MainEventPriceStatut[];
};

export type MainEventPriceStatut = {
  id: number;
  MainEventPrice_id?: number | MainEventPrice | null;
  Statut_id?: number | Statut | null;
};

export type MainEventRegistration = {
  abstracts: any[] | Abstract[];
  civilite?: string | null;
  confirmed?: boolean | null;
  confirmedPresence?: boolean | null;
  date_created?: string | null;
  date_updated?: string | null;
  deletedAt?: string | null;
  email?: string | null;
  firstName?: string | null;
  formSubmissions: any[] | FormSubmission[];
  id: number;
  lastName?: string | null;
  mainEvent?: number | MainEvent | null;
  options: any[] | MainEventRegistrationMainEventOption[];
  paymentInformation?: number | PaymentInformation | null;
  person?: number | Person | null;
  privateInformation?: string | null;
  registrationDate?: string | null;
  registrationKey?: string | null;
  sessions: any[] | MainEventRegistrationMainEventSession[];
};

export type MainEventRegistrationMainEventOption = {
  id: number;
  MainEventOption_id?: number | MainEventOption | null;
  MainEventRegistration_id?: number | MainEventRegistration | null;
};

export type MainEventRegistrationMainEventSession = {
  id: number;
  MainEventRegistration_id?: number | MainEventRegistration | null;
  MainEventSession_id?: number | MainEventSession | null;
};

export type MainEventSession = {
  abstracts: any[] | Abstract[];
  disabled?: boolean | null;
  endDate?: string | null;
  id: number;
  mainEventDay?: number | MainEventDay | null;
  mandatory?: boolean | null;
  moderators: any[] | MainEventSessionModerator[];
  name?: string | null;
  price?: number | null;
  registrations: any[] | MainEventRegistrationMainEventSession[];
  startDate?: string | null;
  type?: number | MainEventSessionType | null;
};

export type MainEventSessionModerator = {
  id: number;
  MainEventRegistration_id?: number | MainEventRegistration | null;
  MainEventSession_id?: number | MainEventSession | null;
};

export type MainEventSessionType = {
  id: number;
  name?: string | null;
  nameEn?: string | null;
  oralCommunication?: boolean | null;
};

export type MainEventTemplate = {
  content?: string | null;
  id: number;
  mainEvent?: number | MainEvent | null;
  type?: string | null;
};

export type MainEventType = {
  id: number;
  name?: string | null;
};

export type Metier = {
  group_name?: string | null;
  group_name_2?: string | null;
  id: number;
  name?: string | null;
  name_en?: string | null;
  statuts: any[] | MetierStatut[];
};

export type MetierStatut = {
  id: number;
  Metier_id?: number | Metier | null;
  Statut_id?: number | Statut | null;
};

export type Organization = {
  id: number;
  name?: string | null;
  type?: string | null;
};

export type PaymentInformation = {
  billDate?: string | null;
  billRef?: string | null;
  billStructureAddress?: string | null;
  billStructureAddress2?: string | null;
  billStructureCity?: string | null;
  billStructureCountry?: string | null;
  billStructureCp?: string | null;
  billStructureName?: string | null;
  id: number;
  orderRef?: string | null;
  paid?: boolean | null;
  paymentDate?: string | null;
  totalPrice?: number | null;
};

export type Person = {
  civilite?: string | null;
  description?: string | null;
  email?: string | null;
  expertiseDomains: any[] | PersonExpertiseDomain[];
  fax?: string | null;
  firstName?: string | null;
  geom?: string | null;
  groupes: any[] | GroupePerson[];
  id: number;
  jobs: any[] | Job[];
  lastName?: string | null;
  personKey: string;
  phone?: string | null;
  portable?: string | null;
  privateDescription?: string | null;
  publique?: boolean | null;
  scientificAttachment: any[] | PersonScientificAttachment[];
  subType?: string | null;
  type?: number | PersonType | null;
  website?: string | null;
};

export type PersonExpertiseDomain = {
  ExpertiseDomain_id?: number | ExpertiseDomain | null;
  id: number;
  Person_id?: number | Person | null;
};

export type PersonScientificAttachment = {
  id: number;
  Person_id?: number | Person | null;
  scientificAttachment_id?: number | ScientificAttachment | null;
};

export type PersonThematique = {
  endDate?: string | null;
  id: number;
  person?: number | Person | null;
  startDate?: string | null;
  thematique?: number | Thematique | null;
  type?: string | null;
};

export type PersonType = {
  id: number;
  name?: string | null;
};

export type Project = {
  acronym?: string | null;
  description?: string | null;
  id: number;
  keyword?: string | null;
  leverageEffect?: string | null;
  name?: string | null;
  participations: any[] | ProjectParticipation[];
  partner?: string | null;
  privateDescription?: string | null;
  proposals: any[] | ProjectProposal[];
  publique?: boolean | null;
  scientificResult?: string | null;
  structure?: number | Structure | null;
  team?: number | Team | null;
  thematiques: any[] | ProjectThematique[];
};

export type ProjectThematique = {
  id: number;
  Project_id?: number | Project | null;
  thematique_id?: number | Thematique | null;
};

export type ProjectParticipation = {
  endDate?: string | null;
  id: number;
  person?: number | Person | null;
  project?: number | Project | null;
  startDate?: string | null;
  type?: string | null;
};

export type ProjectProposal = {
  acceptedBudget?: number | null;
  acceptedDuration?: number | null;
  assignCandidate?: string | null;
  callForProject?: number | CallForProject | null;
  civilite?: string | null;
  comments?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  email?: string | null;
  finalEvaluation?: string | null;
  firstName?: string | null;
  formSubmissions: any[] | FormSubmission[];
  id: number;
  lastName?: string | null;
  person?: number | Person | null;
  ppKey?: string | null;
  privateInformation?: string | null;
  project?: number | Project | null;
  title?: string | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
};

export type Publication = {
  content?: string | null;
  date_created?: string | null;
  date_updated?: string | null;
  document?: string | DirectusFiles | null;
  id: number;
  person?: number | Person | null;
  pub_date?: string | null;
  structure?: number | Structure | null;
  title?: string | null;
  type?: number | PublicationType | null;
  user_created?: string | DirectusUsers | null;
  user_updated?: string | DirectusUsers | null;
  web_site?: string | null;
};

export type PublicationType = {
  id: number;
  name?: string | null;
};

export type ResponsibleFunction = {
  id: number;
  name?: string | null;
};

export type ScientificAttachment = {
  id: number;
  name?: string | null;
};

export type Statut = {
  group_name?: string | null;
  group_name_2?: string | null;
  id: number;
  name: string;
  name_en?: string | null;
};

export type Structure = {
  address?: string | null;
  address_2?: string | null;
  children: any[] | StructureStructure[];
  city?: string | null;
  cp?: string | null;
  email?: string | null;
  fax?: string | null;
  geom?: string | null;
  geosite?: number | Geosite | null;
  id: number;
  image?: string | DirectusFiles | null;
  jobs: any[] | Job[];
  level?: string | null;
  longDescription?: string | null;
  name?: string | null;
  phone?: string | null;
  privateDescription?: string | null;
  publique?: boolean | null;
  responsible?: number | Person | null;
  responsibleFunction?: number | ResponsibleFunction | null;
  scientificAttachments: any[] | StructureScientificAttachment[];
  shortDescription?: string | null;
  shortName?: string | null;
  siret?: string | null;
  teams: any[] | Team[];
  tutelles: any[] | StructureTutelle[];
  type?: number | StructureType | null;
  webSite?: string | null;
};

export type StructureScientificAttachment = {
  id: number;
  scientificAttachment_id?: number | ScientificAttachment | null;
  Structure_id?: number | Structure | null;
};

export type StructureStructure = {
  id: number;
  related_Structure_id?: number | Structure | null;
  Structure_id?: number | Structure | null;
};

export type StructureTutelle = {
  code?: string | null;
  id: number;
  organization?: number | Organization | null;
  sort?: number | null;
  structure?: number | Structure | null;
};

export type StructureType = {
  id: number;
  name?: string | null;
};

export type Survey = {
  description?: string | null;
  id: number;
  name?: string | null;
  status: string;
  year?: number | null;
};

export type SurveyResponse = {
  formSubmissions: any[] | FormSubmission[];
  id: number;
  person?: number | Person | null;
  responseDate?: string | null;
  survey?: number | Survey | null;
  user?: string | DirectusUsers | null;
};

export type Team = {
  adresse?: string | null;
  adresse_2?: string | null;
  city?: string | null;
  code?: string | null;
  cp?: string | null;
  email?: string | null;
  fax?: string | null;
  geom?: string | null;
  geosite?: number | Geosite | null;
  id: number;
  keyword?: string | null;
  longDescription?: string | null;
  name?: string | null;
  person?: number | Person | null;
  phone?: string | null;
  privateDescription?: string | null;
  publique?: boolean | null;
  responsibleFunction?: number | ResponsibleFunction | null;
  scientific_attachment: any[] | TeamScientificAttachment[];
  shortDescription?: string | null;
  shortName?: string | null;
  structure?: number | Structure | null;
  tutelles: any[] | Tutelle[];
  type?: number | TypeEquipe | null;
  web_site?: string | null;
};

export type TeamScientificAttachment = {
  id: number;
  scientificAttachment_id?: number | ScientificAttachment | null;
  Team_id?: number | Team | null;
};

export type Thematique = {
  id: number;
  name?: string | null;
  name_en?: string | null;
  people: any[] | ThematiquePerson[];
};

export type ThematiqueUndefined = {
  collection?: string | null;
  id: number;
  item?: string | null;
  thematique_id?: number | null;
};

export type ThematiquePerson = {
  endDate?: string | null;
  id: number;
  person?: number | Person | null;
  startDate?: string | null;
  thematique?: number | Thematique | null;
  type?: string | null;
};

export type Tutelle = {
  code?: string | null;
  id: number;
  organization?: number | Organization | null;
  sort?: number | null;
  team?: number | Team | null;
};

export type TypeEquipe = {
  id: number;
  name?: string | null;
};

export type UserHistory = {
  date_updated?: string | null;
  id: number;
  name?: string | null;
  objectId?: number | null;
  type?: string | null;
  user?: string | DirectusUsers | null;
};

export type UserSearch = {
  date_created?: string | null;
  date_updated?: string | null;
  favorite?: boolean | null;
  id: number;
  query?: unknown | null;
  user?: string | DirectusUsers | null;
};

export type UserTableState = {
  id: number;
  state?: unknown | null;
  tableId?: string | null;
  user?: string | DirectusUsers | null;
};

export type ValorizationType = {
  id: number;
  name?: string | null;
};

export type CustomDirectusTypes = {
  Abstract: Abstract[];
  AbstractAuthor: AbstractAuthor[];
  AbstractAuthorStructure: AbstractAuthorStructure[];
  CallForProject: CallForProject[];
  CallForProject_Person: CallForProjectPerson[];
  CallForProject_Structure: CallForProjectStructure[];
  CallForProject_thematique: CallForProjectThematique[];
  CallForProjectType: CallForProjectType[];
  directus_access: DirectusAccess[];
  directus_activity: DirectusActivity[];
  directus_collections: DirectusCollections[];
  directus_comments: DirectusComments[];
  directus_dashboards: DirectusDashboards[];
  directus_extensions: DirectusExtensions[];
  directus_fields: DirectusFields[];
  directus_files: DirectusFiles[];
  directus_flows: DirectusFlows[];
  directus_folders: DirectusFolders[];
  directus_migrations: DirectusMigrations[];
  directus_notifications: DirectusNotifications[];
  directus_operations: DirectusOperations[];
  directus_panels: DirectusPanels[];
  directus_permissions: DirectusPermissions[];
  directus_policies: DirectusPolicies[];
  directus_presets: DirectusPresets[];
  directus_relations: DirectusRelations[];
  directus_revisions: DirectusRevisions[];
  directus_roles: DirectusRoles[];
  directus_sessions: DirectusSessions[];
  directus_settings: DirectusSettings;
  directus_shares: DirectusShares[];
  directus_sync_id_map: DirectusSyncIdMap[];
  directus_translations: DirectusTranslations[];
  directus_users: DirectusUsers[];
  directus_versions: DirectusVersions[];
  directus_webhooks: DirectusWebhooks[];
  Documentation: Documentation[];
  Evaluation: Evaluation[];
  EvaluationField: EvaluationField[];
  EvaluationSession: EvaluationSession[];
  ExpertiseDomain: ExpertiseDomain[];
  form: Form[];
  FormAnswer: FormAnswer[];
  FormEvaluationAnswer: FormEvaluationAnswer[];
  FormField: FormField[];
  FormGroup: FormGroup[];
  FormSubmission: FormSubmission[];
  geosite: Geosite[];
  Groupe: Groupe[];
  Groupe_Person: GroupePerson[];
  job: Job[];
  keywords: Keywords[];
  MailServerStatus: MailServerStatus[];
  MailStatus: MailStatus[];
  MailTemplate: MailTemplate[];
  MainEvent: MainEvent[];
  MainEvent_thematique: MainEventThematique[];
  MainEventDay: MainEventDay[];
  MainEventManagement: MainEventManagement[];
  MainEventOption: MainEventOption[];
  MainEventPrice: MainEventPrice[];
  MainEventPrice_Statut: MainEventPriceStatut[];
  MainEventRegistration: MainEventRegistration[];
  MainEventRegistration_MainEventOption: MainEventRegistrationMainEventOption[];
  MainEventRegistration_MainEventSession: MainEventRegistrationMainEventSession[];
  MainEventSession: MainEventSession[];
  MainEventSessionModerator: MainEventSessionModerator[];
  MainEventSessionType: MainEventSessionType[];
  MainEventTemplate: MainEventTemplate[];
  MainEventType: MainEventType[];
  Metier: Metier[];
  Metier_Statut: MetierStatut[];
  organization: Organization[];
  PaymentInformation: PaymentInformation[];
  Person: Person[];
  Person_ExpertiseDomain: PersonExpertiseDomain[];
  Person_scientificAttachment: PersonScientificAttachment[];
  PersonThematique: PersonThematique[];
  PersonType: PersonType[];
  Project: Project[];
  Project_thematique: ProjectThematique[];
  ProjectParticipation: ProjectParticipation[];
  ProjectProposal: ProjectProposal[];
  Publication: Publication[];
  publicationType: PublicationType[];
  responsibleFunction: ResponsibleFunction[];
  scientificAttachment: ScientificAttachment[];
  Statut: Statut[];
  Structure: Structure[];
  Structure_scientificAttachment: StructureScientificAttachment[];
  Structure_Structure: StructureStructure[];
  StructureTutelle: StructureTutelle[];
  structureType: StructureType[];
  Survey: Survey[];
  SurveyResponse: SurveyResponse[];
  Team: Team[];
  Team_scientificAttachment: TeamScientificAttachment[];
  thematique: Thematique[];
  thematique_undefined: ThematiqueUndefined[];
  ThematiquePerson: ThematiquePerson[];
  Tutelle: Tutelle[];
  Type_equipe: TypeEquipe[];
  userHistory: UserHistory[];
  UserSearch: UserSearch[];
  UserTableState: UserTableState[];
  valorizationType: ValorizationType[];
};
