import React from "react";
import dynamic from "next/dynamic";
import { useI18n } from "next-localization";
import { capitalizeFirst } from "@/utils";
import * as Styled from "./styles";

const Link = dynamic(() => import("@/components/Link"));

export const Page404Content = (): JSX.Element => {
	const i18n = useI18n();
	const { t } = i18n;

	return (
		<Styled.Wrapper>
			<div>
				<Styled.Label>Error 404: {capitalizeFirst(t("phrases.page-not-found"))}</Styled.Label>
				<Styled.Heading>{t("sentences.404-title")}</Styled.Heading>
				<Styled.Paragraph>{t("sentences.404-text")}</Styled.Paragraph>

				<span
					css={`
						margin-block-start: 1rem;
						margin-inline-start: 0.25rem;
					`}
				>
					<Link type="button-link" href={t("navigation.home.url")}>
						{capitalizeFirst(t("phrases.back-to-safety"))}
					</Link>
				</span>
			</div>
			<Styled.Image />
		</Styled.Wrapper>
	);
};

export default Page404Content;
