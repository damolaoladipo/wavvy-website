import { CheckList, StepSection } from './step-layout';
import {
    AiInsightsVisual,
    CandidateInterviewVisual,
    CompareCandidatesVisual,
    CreateInterviewVisual,
    DecideVisual,
    InviteCandidatesVisual,
} from './step-visuals';

const interviewFlow = [
    { title: 'Short profile', rest: ' — basic details and an optional CV' },
    { title: 'Camera and microphone check', rest: ' before anything is recorded' },
    { title: 'Ungraded practice question', rest: ' to warm up' },
    { title: 'The interview', rest: ' — with thinking time and a clear timer per answer' },
    { title: 'Connection dropped?', rest: ' They can reconnect and carry on' },
];

export function HowItWorksSteps() {
    return (
        <>
            <StepSection
                id="create"
                step={1}
                title="Create your interview in minutes"
                description="Start from the role. Wavvy turns your job details into a structured interview you can edit before anything goes live."
                visual={<CreateInterviewVisual />}
            >
                <CheckList
                    items={[
                        'Add the job information and requirements',
                        'Set evaluation criteria and how much each one counts',
                        'Review and edit every question and its answer time',
                        "Publish when you're happy with it",
                    ]}
                />
            </StepSection>

            <StepSection
                id="invite"
                step={2}
                title="Invite candidates with one link"
                description="No calendars to coordinate. Share the link in your job ad or invite candidates by email, then watch completions come in."
                visual={<InviteCandidatesVisual />}
                visualFirst
                className="border-y border-[#e5e5df]"
            >
                <CheckList
                    items={[
                        'One shareable link per recruitment',
                        "See who's invited, in progress and done",
                        "Agencies keep each client's recruitments separate",
                    ]}
                />
            </StepSection>

            <StepSection
                id="interview"
                step={3}
                title="Candidates interview when it suits them"
                description="A calm, guided experience under your company's name, on any device with a camera and microphone."
                visual={<CandidateInterviewVisual />}
            >
                <ol className="flex flex-col gap-4">
                    {interviewFlow.map((item, index) => (
                        <li
                            key={item.title}
                            className="flex items-start gap-3.5 text-[17px] leading-snug text-[#2f302b]"
                        >
                            <span className="flex size-7 shrink-0 items-center justify-center rounded-full border border-[#d6d7cf] text-xs font-medium text-[#1a1a1a]">
                                {index + 1}
                            </span>
                            <span className="pt-0.5">
                                <strong className="font-semibold text-[#1a1a1a]">
                                    {item.title}
                                </strong>
                                {item.rest}
                            </span>
                        </li>
                    ))}
                </ol>
            </StepSection>

            <StepSection
                id="insights"
                step={4}
                title="Review AI insights for every answer"
                description="Each interview comes back with a summary, a score against your criteria and the recording and transcript behind it."
                visual={<AiInsightsVisual />}
                visualFirst
                className="border-y border-[#e5e5df]"
            >
                <CheckList
                    items={[
                        'A short written summary of each candidate',
                        'A match score weighted by your criteria',
                        'Recordings and transcripts for every answer',
                    ]}
                />
            </StepSection>

            <StepSection
                id="compare"
                step={5}
                title="Compare candidates side by side"
                description="Pick up to three candidates and see them against the same criteria. Differences are easy to spot and easy to explain to a hiring manager."
                visual={<CompareCandidatesVisual />}
            />

            <StepSection
                id="decide"
                step={6}
                tone="dark"
                title="You decide who moves forward"
                description="Wavvy never advances or rejects a candidate on its own. You review, add notes and choose the next step for every person."
                visual={<DecideVisual />}
            >
                <p className="max-w-[500px] text-pretty text-[15px] leading-[1.6] text-[#c9cac2]">
                    Candidates can also receive feedback on their interview, so
                    the first round leaves a good impression either way.{' '}
                    <span className="font-semibold text-[#f2c86b]">
                        [VALIDATE: whether feedback is optional per recruitment]
                    </span>
                </p>
            </StepSection>
        </>
    );
}
