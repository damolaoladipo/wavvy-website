'use server';

const COMPANY_TYPES = ['in-house', 'agency', 'other'] as const;
type CompanyType = (typeof COMPANY_TYPES)[number];

export type DemoField = 'fullName' | 'email' | 'company' | 'companyType' | 'notes';

export type DemoValues = Record<DemoField, string>;

export type DemoRequestState =
    | { status: 'idle'; values: DemoValues }
    | {
          status: 'error';
          values: DemoValues;
          errors: Partial<Record<DemoField, string>>;
      }
    | { status: 'success'; values: DemoValues };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function readField(formData: FormData, name: DemoField, maxLength: number) {
    const value = formData.get(name);
    return typeof value === 'string' ? value.trim().slice(0, maxLength) : '';
}

export async function requestDemo(
    _previous: DemoRequestState,
    formData: FormData,
): Promise<DemoRequestState> {
    const values: DemoValues = {
        fullName: readField(formData, 'fullName', 120),
        email: readField(formData, 'email', 254),
        company: readField(formData, 'company', 160),
        companyType: readField(formData, 'companyType', 20),
        notes: readField(formData, 'notes', 1000),
    };

    const errors: Partial<Record<DemoField, string>> = {};
    if (!values.fullName) errors.fullName = 'Please enter your full name.';
    if (!values.email) errors.email = 'Please enter your work email.';
    else if (!EMAIL_PATTERN.test(values.email))
        errors.email = 'That email doesn’t look right.';
    if (!values.company) errors.company = 'Please enter your company name.';
    if (!COMPANY_TYPES.includes(values.companyType as CompanyType))
        errors.companyType = 'Please choose a company type.';

    if (Object.keys(errors).length > 0) {
        return { status: 'error', values, errors };
    }

    return { status: 'success', values };
}
